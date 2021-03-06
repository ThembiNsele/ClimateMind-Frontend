import React from 'react';
import { useQuery } from 'react-query';
import { getSolutions } from '../api/getSolutions';
import { COLORS } from '../common/styles/CMTheme';
import { Typography } from '@material-ui/core';
import Loader from '../components/Loader';
import Card from '../components/Card';
import CardHeader from '../components/CardHeader';
import Error500 from './Error500';
import Wrapper from '../components/Wrapper';
import SolutionOverlay from '../components/SolutionOverlay';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';
import PageTitle from '../components/PageTitle';
import PageContent from '../components/PageContent';
import { useSession } from '../hooks/useSession';

const SolutionsFeed: React.FC = () => {
  const { quizId } = useSession();
  const { data, isLoading, error } = useQuery(['solutions', quizId], () => {
    if (quizId) {
      return getSolutions(quizId);
    }
  });

  if (error) return <Error500 />;

  return (
    <Wrapper bgColor={COLORS.ACCENT2} fullHeight>
      <PageContent>
        <ScrollToTopOnMount />

        <PageTitle>Ready to take action?</PageTitle>

        {isLoading && <Loader />}
        {React.Children.toArray(
          data?.solutions.map((solution, i) => (
            <div data-testid={`ActionCard-${solution.iri}`}>
              <Card
                header={
                  <CardHeader
                    title={solution.solutionTitle}
                    preTitle={`${solution.solutionType} action`}
                  />
                }
                key={`value-${i}`}
                index={i}
                imageUrl={solution.imageUrl}
                footer={<SolutionOverlay solution={solution} />}
              >
                <Typography variant="body1">
                  {solution.shortDescription}
                </Typography>
              </Card>
            </div>
          ))
        )}
      </PageContent>
    </Wrapper>
  );
};

export default SolutionsFeed;
