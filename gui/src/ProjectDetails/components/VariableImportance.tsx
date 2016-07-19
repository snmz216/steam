/**
 * Created by justin on 6/28/16.
 */
import * as React from 'react';
import DetailLine from './DetailLine';
import Table from '../../Projects/components/Table';
import Row from '../../Projects/components/Row';
import Cell from '../../Projects/components/Cell';
import '../styles/goodnessoffit.scss';

interface Props {
}

export default class GoodnessOfFit extends React.Component<Props, any> {
  render(): React.ReactElement<HTMLDivElement> {
    let metrics = [
      {
        label: 'F1',
        value: '',
      },
      {
        label: 'Log Loss',
        value: '',
      },
      {
        label: 'Mean Squared Error',
        value: '',
      },
      {
        label: 'Precision',
        value: '',
      },
      {
        label: 'Recall',
        value: '',
      }
    ];
    return (
      <div className="metrics">
        <div className="metrics-summary">
          <div className="metrics-summary--title">Metrics</div>
          {metrics.map((item, i) => {
            return <DetailLine key={i} icon={item.label} label={item.label} value={item.value}/>;
          })}
        </div>
        <Table>
          <Row header={true}>
            <Cell>
              <i className="fa fa-caret-down"/>
            </Cell>
            <Cell>
              COLUMN
            </Cell>
            <Cell className="graph">
              IMPORTANCE
            </Cell>
            <Cell className="graph">
              PARTIAL DEPENDENCY
            </Cell>
            <Cell className="graph">
              RESPONSE DISTRIBUTION
            </Cell>
            <Cell className="graph">
              NOTES
            </Cell>
          </Row>
        </Table>
      </div>
    );
  }
}