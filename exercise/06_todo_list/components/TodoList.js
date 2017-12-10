var TodoList = React.createClass({
    getInitialState: function () {
        return{
            list: [
                {id: 1,text:'buy 1 apple', done:false},
                {id: 2,text:'buy 1 pen', done:false},
                {id: 3,text:'buy 1 apple-pen', done:true},
            ],
        };
    },
    addItem: function(text){
        var item={
            id:this.state.list.length+1,
            text:text,
            done:false,
        };
        var list = this.state.list.concat(item);
        this.setState({
            list:list,
        });
    },
    toggleItem: function(id){
        for(var i=0; i<this.state.list.length; i++){
            var item = this.state.list[i];
            if(item.id === id){
                item.done =  !item.done;
                break;
            }
        }
        this.forceUpdate();
    },
    render: function(){
        var toggleItem = this.toggleItem;
        return (
            <div className="todo-list">
                TodoList
                <TodoForm addItem={this.addItem} />
                <ul className="todo-list">
                    {
                        this.state.list.map(function(item){
                        return (
                            <TodoItem 
                                done={item.done} 
                                id={item.id} 
                                key={item.id}
                                toggleItem={toggleItem}
                            >
                                {item.text}
                            </TodoItem>
                        );
                    })}
                </ul>
            </div>
        );
    },
});