import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import { ResumeRightP, ResumeRightH4 } from './ResumeElements'

class Education extends Component {
    render() {
        return (
            <Grid>
                {/* Left side  */}
                <Cell col={4}>
                    <ResumeRightP>{this.props.startYear} - {this.props.endYear}</ResumeRightP>
                    
                </Cell>

                {/* Right side */}
                <Cell col={8}>
                    <ResumeRightH4 style={{marginTop:"0px"}}>{this.props.schoolName}</ResumeRightH4>
                    <ResumeRightP>{this.props.schoolDescription}</ResumeRightP>
                </Cell>
            </Grid>
        )
    }
}
export default Education;