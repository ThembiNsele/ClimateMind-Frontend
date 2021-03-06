import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useConversations } from '../hooks/useConversations';
import { ConversationCard } from './ConversationCard';
import PageTitle from './PageTitle';
import Loader from './Loader';
import { ItsBrokenIcon } from './ItsBrokenIcon';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '640px',
      marginBottom: '56px',
    },
  })
);

export function ConversationsList() {
  const { conversations, isLoading, isError } = useConversations();
  const classes = useStyles();

  if (isError) return <ItsBrokenIcon />;

  if (!isLoading && conversations.length === 0)
    return (
      <Typography variant="h3">
        Invite a friend to start having conversations...
      </Typography>
    );

  return (
    <>
      <PageTitle>Conversations</PageTitle>

      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.root}
        spacing={3}
      >
        {isLoading && <Loader />}
        {conversations?.map((conversation) => (
          <Grid
            item
            style={{ width: '100%' }}
            key={conversation.conversationId}
          >
            <ConversationCard conversation={conversation} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ConversationsList;
