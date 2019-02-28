class EmailPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      success: true,
      results: '',
    };
  }

  submit(operation, transposit) {
    transposit.runOperation(operation, this.props.extractInputs()).then((response) => {
      if (response.status !== "SUCCESS") {
        throw response;
      }
      this.setState({
        results: response.result.results[0].preview,
      });
    }).catch((response) => {
      // error(response);
    });
  }

  handleChange = (event) => {
    this.setState({results: event.target.value});
  }

  render() {
    const { loading, success} = this.state;
    if (loading) {
      return (
          <div id="loading" className="alert alert-warning" role="alert">
            Loading...
          </div>
      );
    } else if (!success) {
      return (
          <div id="failure" className="alert alert-warning" role="alert">
            Operation failed. See JavaScript console.
          </div>
      );
    } else {
      return <div>
        <div className="container mt-3 mt-md-4">
          <button className="btn btn-primary" onClick={this.submit.bind(this, this.props.operation, this.props.transposit)}>{this.props.name}</button>
          <div id="success" className="mt-3">
            <div className="card">
              <div className="card-body">
                <div id="send-results"></div>
              </div>
            </div>
          </div>
          <div className="card mt-2">
            <div className="card-body">
              <input type="text" className="form-control border-0" value={this.state.results} onChange={this.handleChange} />
            </div>
          </div>
          <div className="mt-3">
            <button id="sendEmailAndWhitelist" type="submit" className="btn btn-primary">Send email</button>
          </div>
          <div>

          </div>
        </div>
      </div>;
    }
  }
}