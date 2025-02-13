-- PostgreSQL database dump
-- Dumped by Cascade AI on 2025-02-13 12:07

-- Table structure
CREATE TABLE IF NOT EXISTS public.users (
    id UUID PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    email_confirmed BOOLEAN DEFAULT FALSE,
    confirmation_token VARCHAR(255),
    confirmation_sent_at TIMESTAMP WITH TIME ZONE
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_users_confirmation_token ON public.users(confirmation_token);
CREATE INDEX IF NOT EXISTS idx_users_email_confirmed ON public.users(email_confirmed);

-- Enable Row Level Security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view their own confirmation status" 
    ON public.users
    FOR SELECT 
    USING ((auth.uid() = id));

CREATE POLICY "System can update confirmation status" 
    ON public.users
    FOR UPDATE 
    USING ((auth.uid() = id));
