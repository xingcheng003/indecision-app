class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.showDetail = this.showDetail.bind(this);
    this.state = {
      visibility: false,
    };
  }
  showDetail() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility</h1>
        <button onClick={this.showDetail}>
          {this.state.visibility ? "Hide Details" : "Show Details"}
        </button>
        {this.state.visibility && <p>Hey, this is the details</p>}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById("app"));

// let visibility = false;

// const showDetail = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={showDetail}>
//         {visibility ? "Hide Details" : "Show Details"}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey, this is the details</p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(jsx, document.getElementById("app"));
// };
// render();
