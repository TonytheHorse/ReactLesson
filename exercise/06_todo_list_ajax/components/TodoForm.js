var TodoForm = React.createClass({
    onSubmit: function(e){
        e.preventDefault();
        var text = this.ipt.value;
        this.ipt.value = '';
        this.props.addItem(text);
    },
    inputRef: function(ipt){
        this.ipt = ipt;
    },
    render: function(){
        return(
            <form className="todo-form" onSubmit={this.onSubmit}>
                <input type="text" ref={this.inputRef}/>
            </form>
        );
    },
});