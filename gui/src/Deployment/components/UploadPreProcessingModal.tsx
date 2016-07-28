/**
 * Created by justin on 7/27/16.
 */
import * as React from 'react';
import * as $ from 'jquery';
import DefaultModal from '../../App/components/DefaultModal';
import Table from '../../Projects/components/Table';
import Row from '../../Projects/components/Row';
import Cell from '../../Projects/components/Cell';
import '../styles/uploadpreprocessingmodal.scss';


interface Props {
  open: boolean,
  upload: Function,
  cancel: Function
}

export default class UploadPreProcessingModal extends React.Component<Props, any> {
  constructor() {
    super();
    this.state = {
      mainFiles: [],
      libraryFiles: []
    };
  }

  selectMain() {
    $('input[name="selectMain"]').click();
  }

  selectLibraries() {
    $('input[name="selectLibraries"]').click();
  }

  selectMainHandler(event) {
    this.setState({
      mainFiles: event.target.files[0]
    });
  }

  selectLibrariesHandler(event) {
    this.setState({
      libraryFiles: Array.prototype.slice.call(event.target.files)
    });
  }

  render(): React.ReactElement<DefaultModal> {
    return (
      <DefaultModal className="upload-preprocessing-modal" open={this.props.open}>
        <header>
          UPLOAD PRE-PROCESSING PACKAGE (PYTHON)
        </header>
        <section>
          <Table>
            <Row>
              <Cell>
                SELECT PYTHON MAIN
              </Cell>
              <Cell>
                <div>Select a main Python file for pre-processing.</div>
                <span className="muted">The output from this Python file should be one row of an H2O data from that your model is expecting.</span>
                <div className="upload">
                  <span className="upload-info" onClick={this.selectMain.bind(this)}>
                    <i className="fa fa-folder"/>
                    <span>{this.state.mainFiles.name}</span>
                    <input type="file" name="selectMain" onChange={this.selectMainHandler.bind(this)}/>
                  </span>
                  <i className="fa fa-close"/>
                </div>
              </Cell>
            </Row>
            <Row>
              <Cell>
                SELECT PYTHON LIBRARIES
              </Cell>
              <Cell>
                <div>Select a main Python file for pre-processing.</div>
                <span className="muted">Any non-standard libraries called here should be installed into your deployment environment prior to launching services.</span>
                <div className="upload">
                  <span className="upload-info" onClick={this.selectLibraries.bind(this)}>
                    <i className="fa fa-folder"/>
                    <span>{this.state.libraryFiles.map((file, i) => {
                      return <div key={i}>{file.name}</div>;
                    })}</span>
                    <input type="file" name="selectLibraries" onChange={this.selectLibrariesHandler.bind(this)} multiple/>
                  </span>
                  <i className="fa fa-close"/>
                </div>
              </Cell>
            </Row>
            <Row>
              <Cell>
                NAME THE PACKAGE
              </Cell>
              <Cell>
                <div>Pick a name for this pre-processing package. You will use it as a reference when deploying models.</div>
                <div className="package-name-label muted">Package name</div>
                <input type="text"/>
              </Cell>
            </Row>
            <Row>
              <Cell/>
              <Cell className="button-container">
                <button className="default" onClick={this.props.upload.bind(this)}>
                  Upload
                </button>
                <button className="default invert" onClick={this.props.cancel.bind(this)}>
                  Cancel
                </button>
              </Cell>
            </Row>
          </Table>
        </section>
      </DefaultModal>
    );
  }
}
