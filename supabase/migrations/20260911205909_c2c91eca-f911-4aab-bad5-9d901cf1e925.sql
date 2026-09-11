CREATE TABLE public.interest_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organisation TEXT,
  role TEXT NOT NULL DEFAULT 'other',
  message TEXT,
  wants_meeting BOOLEAN NOT NULL DEFAULT false,
  lang TEXT NOT NULL DEFAULT 'pl',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.interest_leads TO anon, authenticated;
GRANT ALL ON public.interest_leads TO service_role;

ALTER TABLE public.interest_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit interest" ON public.interest_leads
  FOR INSERT TO anon, authenticated WITH CHECK (true);