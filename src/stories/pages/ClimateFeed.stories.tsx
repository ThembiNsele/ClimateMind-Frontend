import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Grid, makeStyles } from '@material-ui/core';
import Loader from '../../components/Loader';
import Card from '../../components/Card';
import CardHeader from '../../components/CardHeader';
import CardOverlay from '../../components/CardOverlay';
import Wrapper from '../../components/Wrapper';
import AppBar from '../../components/AppBar/AppBar';

// create a test component, decoupled from context...
const styles = makeStyles({
  root: {
    flexGrow: 1,
    minHeight: '100vh',
  },
  typography: {
    textAlign: 'center',
  },
});

const ClimateFeed: React.FC = () => {
  const classes = styles();

  const climateFeed = [
    {
      actionHeadline: 'Reducing Food Waste',
      effectDescription: 'No short desc available at present',
      effectId: 'R8t0oNsG3WgnupXsBVSjMHZ',
      effectScore: 14,
      effectTitle: 'increase in suicide',
      imageUrl:
        'https://yaleclimateconnections.org/wp-content/uploads/2018/04/041718_child_factories.jpg',
    },
    {
      actionHeadline: 'Reducing Food Waste',
      effectDescription: 'No short desc available at present',
      effectId: 'R8epBa4UvcieLTynfK3E84u',
      effectScore: 14,
      effectTitle: 'decrease in population of moose available to hunt',
      imageUrl:
        'https://yaleclimateconnections.org/wp-content/uploads/2018/04/041718_child_factories.jpg',
    },
  ];

  if (!climateFeed || !climateFeed.length) {
    return <Loader />;
  }
  return (
    <>
      <Wrapper bgColor="#70D7CC">
        <Grid
          container
          className={classes.root}
          data-testid="ClimateFeed"
          justify="space-around"
        >
          <AppBar />

          <Grid item sm={12} lg={12} container>
            {climateFeed.map((effect, i) => (
              <Card
                header={<CardHeader title={effect.effectTitle} index={i} />}
                key={`value-${i}`}
                index={i}
                shortDescription={effect.effectDescription}
                imageUrl={effect.imageUrl}
                actionHeadline={effect.actionHeadline}
                footer={
                  <CardOverlay
                    title={effect.effectTitle}
                    imageUrl={effect.imageUrl}
                    shortDescription={effect.effectDescription}
                  />
                }
              />
            ))}
          </Grid>

          <Grid item sm={false} lg={4}>
            {/* right gutter */}
          </Grid>
        </Grid>
      </Wrapper>
    </>
  );
};

export default {
  title: 'ClimateMind/pages/ClimateFeed',
  component: ClimateFeed,
} as Meta;

const Template: Story<{}> = (args) => <ClimateFeed {...args} />;

export const Default = Template.bind({});
Default.args = {};
