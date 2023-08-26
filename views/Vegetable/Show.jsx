const React = require('react')
    class Show extends React.Component {
       render () {

        const Vegetable = this.props.Vegetable
        return (
            <div>
                <h1> Show Page </h1>
                The {Vegetable.name} is {Vegetable.color}
                {Vegetable.readyToEat? ' Its is ready to eat' : ' It is not ready to eat... Cant touch this' }
            </div>
         
         );
        }
     }

     module.exports  = Show;