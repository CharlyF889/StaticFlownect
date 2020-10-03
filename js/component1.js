class WelcomeBack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'broder',
            apppVersion: '1'
        }
    }

    render() {
        return (
            <>
                <h2 className="head">Hello {this.state.name || 'Friend'}! Welcome Back.</h2>
                {
                    this.state.apppVersion && this.state.apppVersion < 2
                        ? <p>You are about to witness the new era of Data Management and Digital Services.</p>
                        : ''
                }
                <CoolButton customText={this.state.apppVersion && this.state.apppVersion < 2 ? 'Adquiere tu FlowServer' : 'Download'} />
            </>
        )
    }


}