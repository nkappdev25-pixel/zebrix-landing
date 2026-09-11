import * as React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface LeadNotificationProps {
  name?: string
  email?: string
  organisation?: string
  role?: string
  message?: string
  wantsMeeting?: boolean
  lang?: string
}

export const LeadNotification = ({
  name = '—',
  email = '—',
  organisation = '—',
  role = '—',
  message = '—',
  wantsMeeting = false,
  lang = 'pl',
}: LeadNotificationProps) => (
  <Html>
    <Head />
    <Preview>{`New Zebrix interest form entry from ${name}`}</Preview>
    <Body style={{ backgroundColor: '#F6F8FD', fontFamily: 'Arial, sans-serif', padding: '24px' }}>
      <Container style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '28px' }}>
        <Heading style={{ fontSize: '20px', color: '#0F1F3D', margin: '0 0 8px' }}>
          New interest form entry
        </Heading>
        <Text style={{ fontSize: '14px', color: '#0F1F3D', opacity: 0.7, margin: '0 0 16px' }}>
          Someone filled in the Zebrix interest form.
        </Text>
        <Hr />
        <Section>
          <Text style={{ fontSize: '14px', color: '#0F1F3D', margin: '8px 0' }}>
            <strong>Name:</strong> {name}
          </Text>
          <Text style={{ fontSize: '14px', color: '#0F1F3D', margin: '8px 0' }}>
            <strong>Email:</strong> {email}
          </Text>
          <Text style={{ fontSize: '14px', color: '#0F1F3D', margin: '8px 0' }}>
            <strong>Organisation:</strong> {organisation}
          </Text>
          <Text style={{ fontSize: '14px', color: '#0F1F3D', margin: '8px 0' }}>
            <strong>Role:</strong> {role}
          </Text>
          <Text style={{ fontSize: '14px', color: '#0F1F3D', margin: '8px 0' }}>
            <strong>Wants a meeting:</strong> {wantsMeeting ? 'Yes' : 'No'}
          </Text>
          <Text style={{ fontSize: '14px', color: '#0F1F3D', margin: '8px 0' }}>
            <strong>Language:</strong> {lang}
          </Text>
          <Hr />
          <Text style={{ fontSize: '14px', color: '#0F1F3D', margin: '8px 0', whiteSpace: 'pre-wrap' }}>
            <strong>Message:</strong>
            <br />
            {message}
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: LeadNotification,
  displayName: 'Interest form notification',
  subject: (data: Record<string, any>) =>
    `New Zebrix interest form entry${data['name'] ? ` — ${data['name']}` : ''}`,
  to: 'nazarii.kovalenko2005@gmail.com',
  previewData: {
    name: 'Anna Nowak',
    email: 'anna@example.com',
    organisation: 'Fundacja Rzadkie Choroby',
    role: 'parent',
    message: 'Chcielibyśmy dowiedzieć się więcej o projekcie.',
    wantsMeeting: true,
    lang: 'pl',
  },
} satisfies TemplateEntry
