import React from "react";
import { Grid, Placeholder } from "semantic-ui-react";
import CreateQuiz from "../../views/CreateQuiz/CreateQuiz";

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <Grid columns="equal" divided>
      <Grid.Column width={3}>
        <Grid.Row>
          dfssd
          <Placeholder>
            <Placeholder.Image />
          </Placeholder>
        </Grid.Row>
      </Grid.Column>
      <Grid.Column>
        <Grid.Row>
          <CreateQuiz />
        </Grid.Row>
      </Grid.Column>
    </Grid>
  );
};
