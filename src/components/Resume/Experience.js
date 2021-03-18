import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import { ResumeRightP, ResumeRightH4 } from './ResumeElements'

class Experience extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <ResumeRightP>{this.props.startYear} - {this.props.endYear}</ResumeRightP>
                    
                </Cell>
                <Cell col={8}>
                    <ResumeRightH4 style={{marginTop:"0px", marginBottom: "0px"}}>{this.props.jobName}</ResumeRightH4>
                    <h6 style={{marginTop:"0px"}}><i>{this.props.jobTitle}</i></h6>
                    <ResumeRightP>{this.props.jobDescription}</ResumeRightP>
                </Cell>
            </Grid>
        )
    }
}
export default Experience;