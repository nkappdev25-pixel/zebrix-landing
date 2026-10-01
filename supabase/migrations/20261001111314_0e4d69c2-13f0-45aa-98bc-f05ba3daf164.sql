DROP POLICY IF EXISTS "Anyone can submit interest" ON public.interest_leads;
CREATE POLICY "Anyone can submit valid interest" ON public.interest_leads
FOR INSERT TO anon, authenticated
WITH CHECK (
  char_length(email) BETWEEN 3 AND 200
  AND email ~ '^[^\s@]+@[^\s@]+\.[^\s@]+$'
  AND char_length(name) BETWEEN 1 AND 120
  AND (organisation IS NULL OR char_length(organisation) <= 160)
  AND char_length(role) <= 40
  AND (message IS NULL OR char_length(message) <= 4000)
  AND char_length(lang) <= 5
);