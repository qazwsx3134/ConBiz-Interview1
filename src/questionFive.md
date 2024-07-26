```tsx
class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleAddCount = this.handleAddCount.bind(this);
  }

  handleAddCount() {
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });

    // 要達到預期的行為，應該這樣
    // this.setState((prevState) => ({ count: prevState.count + 1 }));
    // this.setState((prevState) => ({ count: prevState.count + 1 }));
    // this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleAddCount}>增加</button>
      </div>
    );
  }
}

ReactDOM.render(<Count />, document.getElementById("root"));
```

## 這個 Count 的 component 的問題出在 setState 的時候

1.也就是 handleAddCount()這邊

```tsx
this.setState({ count: this.state.count + 1 });
this.setState({ count: this.state.count + 1 });
this.setState({ count: this.state.count + 1 });
```

2. 這邊 setState 的狀態更新的 this.state.count 都是相同的值，所以這個 setState 會被batch。
   所以，只會增加 1 而不是 3

3. 要修改狀態的話，應該使用 setState 的函數形式：

```tsx
this.setState((prevState) => ({ count: prevState.count + 1 }));
this.setState((prevState) => ({ count: prevState.count + 1 }));
this.setState((prevState) => ({ count: prevState.count + 1 }));
```

當然更好的就是直接

```tsx
this.setState((prevState) => ({ count: prevState.count + 3 }));
```
