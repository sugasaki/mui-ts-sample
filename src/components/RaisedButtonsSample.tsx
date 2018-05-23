import { WithStyles, withStyles } from '@material-ui/core/styles';
import DeleteIcon from 'material-ui-icons/Delete';
import Button from 'material-ui/Button';
import * as React from 'react';
import { ClassNames, styles } from './Styles';


interface IRaisedButtonsProps {
    onClick: () => void;
}

// Componentクラスの場合
class RaisedButtonsSample extends React.Component<IRaisedButtonsProps & WithStyles<ClassNames>, {}> {
    public render() {
        const classes = this.props.classes;
        return (
            <div className={classes.box}>
                <Button onClick={this.props.onClick} className={classes.buttonWithHover}>Default</Button>
                <Button color="primary" className={classes.button}>Primary</Button>
                <Button color="secondary" className={classes.button}><DeleteIcon />削除</Button>
            </div>
        );
    }
}


// withStylesに型注釈が必要な場合は、以下のようにする
export default withStyles<{} & ClassNames>(styles)<IRaisedButtonsProps>(RaisedButtonsSample);
