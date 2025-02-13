import { supabase } from '../utils/supabase'

async function cleanUsers() {
  // Șterge din tabela publică users
  const { error: publicError } = await supabase
    .from('users')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000') // pentru siguranță

  if (publicError) {
    console.error('Error deleting from public.users:', publicError)
  } else {
    console.log('✅ Deleted all users from public.users')
  }

  // Șterge din auth.users
  const { error: authError } = await supabase.auth.admin.deleteUser('*')

  if (authError) {
    console.error('Error deleting from auth.users:', authError)
  } else {
    console.log('✅ Deleted all users from auth.users')
  }
}

cleanUsers()
