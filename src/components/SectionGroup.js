
import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    sectionList: {
        display:'grid',
        gridTemplateColumns: 'repeat(9, 1fr) 40%',
        gridColumnGap:'1em',
        top: 73,
        height: '3em',
        width:"100%",
        position: 'fixed',
        zIndex: 301,
        backgroundColor: '#f2f2f2',
        borderTop: 1,
        color: '#000',
    },
    button: {
        backgroundColor: '#f2f2f2',
        fontWeight: 700,
    },
});

class SectionGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Sections: ["all", "australia-news", "travel", "culture", "books", "media", "business", "sport", "environment"],
        };
    }

    handleSection = (activeSection) => {
        const { handleSection } = this.props;
        handleSection(activeSection);
    }

    render() {
        const {
            classes,
        } = this.props;
        const {
            Sections,
        } = this.state;
        return (
            <div className={classes.sectionList}>
                {Sections.map(value => (
                    <Button
                    key={value}
                        className={classes.button}
                        onClick={()=>this.handleSection(value)}                      
                    >
                        {value!="australia-news"?value:"news"}
                    </Button>
                ))}
            </div>
        )
    }
}

export default withStyles(styles)(SectionGroup);
