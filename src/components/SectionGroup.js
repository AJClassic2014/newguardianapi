
import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { BsNewspaper } from "react-icons/bs";
import { BsGeo } from "react-icons/bs";
import { BsBadge4K } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";
import { BsBook } from "react-icons/bs";

const styles = theme => ({
    sectionList: {
        display:'grid',
        gridTemplateColumns: 'repeat(9, 1fr) 40%',
        /* gridColumnGap:'1em', */
        top: 73,
        paddingLeft: 92,
        height: '3em',
        width:"100%",
        position: 'fixed',
        zIndex: 301,
        backgroundColor: '#ffffff',
        /* borderTop: 1, */
    },
    button: {
        backgroundColor: '#ffffff',
        fontWeight: 500,
        color:'#5f6368',
        fontSize: '0.800rem',
        minWidth: 96,
    },
    actived: {
        backgroundColor: '#ffffff',
        fontWeight: 500,
        color:'#000000',
        fontSize: '0.800rem',
        minWidth: 96,
        borderBottom: 'solid 3px #1a73e8',
        borderRadius: 0,
    },
    icon: {
        height: '1.2em',
        width: '1.2em',
        color: '#c0c2c8',
    },
});

class SectionGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSection: "",
            Sections: ["all", "australia-news", /* "travel", */ /* "culture", */ "books", "media", "business", "sport", /* "environment" */],
        };
    }

    handleSection = (activeSection) => {

        this.setState({ activeSection: activeSection },()=>{
            const { handleSection } = this.props;
            handleSection(activeSection);
          }
            );

       
    }

    render() {
        const {
            classes,
        } = this.props;
        const {
            activeSection,
        } = this.state;
        return (
            <div className={classes.sectionList}>
               {/*  {Sections.map(value => (
                    <Button
                    key={value}
                        className={classes.button}
                        onClick={()=>this.handleSection(value)}                      
                    >
                        {value!="australia-news"?value:"news"}
                    </Button>
                ))} */}
                 <Button
                    key="all"
                        className={activeSection=="all"?classes.actived:classes.button}
                        onClick={()=>this.handleSection("all")}                      
                    >
                        All
                    </Button>
                    <Button
                    key="australia-news"
                        className={activeSection=="australia-news"?classes.actived:classes.button}
                        onClick={()=>this.handleSection("australia-news")}                      
                    >
                       <BsNewspaper className={classes.icon}/>&nbsp;News
                    </Button>
                    <Button
                    key="books"
                        className={activeSection=="books"?classes.actived:classes.button}
                        onClick={()=>this.handleSection("books")}                      
                    >
                        <BsBook className={classes.icon}/>&nbsp;Books
                    </Button>
                    <Button
                    key="media"
                        className={activeSection=="media"?classes.actived:classes.button}
                        onClick={()=>this.handleSection("media")}                      
                    >
                        <BsBadge4K className={classes.icon}/>&nbsp;Media
                    </Button>
                    <Button
                    key="business"
                        className={activeSection=="business"?classes.actived:classes.button}
                        onClick={()=>this.handleSection("business")}                      
                    >
                       <BsBriefcase className={classes.icon}/>&nbsp;Business
                    </Button>
                    <Button
                    key="sport"
                        className={activeSection=="sport"?classes.actived:classes.button}
                        onClick={()=>this.handleSection("sport")}                      
                    >
                        <BsGeo className={classes.icon}/>&nbsp;Sport
                    </Button>
            </div>
        )
    }
}

export default withStyles(styles)(SectionGroup);
