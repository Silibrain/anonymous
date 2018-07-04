class Jumbotron extends React.Component {
    render() {
      return (
        <div className="jumbotron">
          <h1>{this.props.mainText}</h1>
          <p>{this.props.subText}</p>
          <PrimaryButton buttonText='Patients'/>
        </div>
      )
    }
  }
  React.render(<Jumbotron mainText="Hello, world!" subText="this is the subtext"/>, document.getElementById('main'));