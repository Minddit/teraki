import { createClient } from '@supabase/supabase-js'

// Create Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)

async function cleanUsers() {
  try {
    // Șterge din tabela publică users
    const { error: publicError } = await supabase
      .from('users')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000')

    if (publicError) {
      console.error('Error deleting from public.users:', publicError)
    } else {
      console.log('✅ Deleted all users from public.users')
    }

    // Get all users
    const { data: users, error: listError } = await supabase.auth.admin.listUsers()
    
    if (listError) {
      console.error('Error listing users:', listError)
      return
    }

    // Delete each user
    for (const user of users.users) {
      const { error: deleteError } = await supabase.auth.admin.deleteUser(user.id)
      if (deleteError) {
        console.error(`Error deleting user ${user.id}:`, deleteError)
      } else {
        console.log(`✅ Deleted user ${user.id}`)
      }
    }

    console.log('✅ Finished cleaning users')
  } catch (error) {
    console.error('Unexpected error:', error)
  }
}

cleanUsers()
