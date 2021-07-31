import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import ShareLink from '../../pages/ShareLink';
import { MemoryRouter } from 'react-router-dom';
import QueryProvider from '../../contexts/queryClient';
import { ReactQueryDevtools } from 'react-query/devtools';
import { SessionProvider } from '../../contexts/session';
import { QuestionsProvider } from '../../contexts/questions';
import { ResponsesProvider } from '../../contexts/responses';
import { PersonalityProvider } from '../../contexts/personality';
import AuthProvider from '../../contexts/auth';
import { NotificationProvider } from '../../contexts/notifications';

export default {
  title: 'ClimateMind/pages/ShareLink',
  component: ShareLink,
  decorators: [
    (Story) => (
      <MemoryRouter>
        {/* <AuthProvider>
          <NotificationProvider>
            <QueryProvider>
              <ReactQueryDevtools />
              <SessionProvider>
                <QuestionsProvider>
                  <ResponsesProvider>
                    <PersonalityProvider> */}
                      <Story />
                    {/* </PersonalityProvider>
                  </ResponsesProvider>
                </QuestionsProvider>
              </SessionProvider>
            </QueryProvider>
          </NotificationProvider>
        </AuthProvider> */}
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: Story<{}> = (args) => <ShareLink {...args} />;

export const Default = Template.bind({});
Default.args = {};