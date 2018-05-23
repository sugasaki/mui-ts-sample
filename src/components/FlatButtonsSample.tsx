import { WithStyles, withStyles } from '@material-ui/core/styles';
import DeleteIcon from 'material-ui-icons/Delete';
import Button from 'material-ui/Button';
import * as React from 'react';
import { ClassNames, styles } from './Styles';


interface IFlatButtonsProps {
    onClick: () => void;
}

// Stateless Function Componentsの場合
const FlatButtonsSample = withStyles(styles)<IFlatButtonsProps>(
    (props: IFlatButtonsProps & WithStyles<ClassNames>) => {
        const classes = props.classes;
        return (
            <div className={classes.box}>
                {/* クリックイベントの処理はこんな感じ */}
                <Button onClick={props.onClick} className={classes.button}>Default</Button>
                <Button color="primary" className={classes.buttonWithHover}>Primary</Button>
                <Button color="secondary"><DeleteIcon />削除</Button>
            </div>
        );
    }
);


export default FlatButtonsSample;
