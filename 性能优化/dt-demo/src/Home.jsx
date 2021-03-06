import React, {Suspense, lazy} from 'react';
import {withStyles} from '@material-ui/core/styles';
import model from './model.js';
import Card from './Card.jsx';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        marginTop: '2rem'
    }
});

class Home extends React.Component {
    render() {
        let cards = [];
        // 多次添加更多图片，展示懒加载
        for (let i = 0; i < 100; i += 1) {
            cards.push(model.map(panel => (
                <Card key={panel.name} image={panel.image} title={panel.name}
                route={panel.route} description={panel.body}/>
            )));
        }
            return (
                <main className={this.props.classes.root}>
                {cards}
                </main>
                );
            }
        }
        
        export default withStyles(styles)(Home);
        