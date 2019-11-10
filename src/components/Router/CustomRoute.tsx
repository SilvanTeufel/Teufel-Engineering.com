import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';

interface Props extends RouteProps {
  component: React.ComponentClass<any>;
}

interface State {
  loading: boolean;
}

export class CustomRoute extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  createKeys = (path: any) => {
    const keys: string[] = [];
    const patharray = path.split("/");
    for (let i = 1; i < patharray.length; i++){
        keys[i-1] = patharray[i];
    }
    return keys
  }

  render() :JSX.Element {

    const { component: Component, ...rest } = this.props;
    return (
      <div>
        <Route
          {...rest}
          render={props =>
            this.state.loading ? (
              <div>'loading'</div>
            ) : (
                <>
                  <Component {...props} Key={this.createKeys(this.props.path)} />
                </>

              )
          }
        />
      </div>
    );
  }
}
