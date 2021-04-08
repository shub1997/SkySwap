import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { firstSectionInfo } from "../../../../data";
import TextTransition, { presets } from "react-text-transition";
import Logo from '../../../../Logo.png';
const RightCompoundMobile = () => {
  let HeadOne = firstSectionInfo.headOne;
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
  let HeadOne = firstSectionInfo.headOne;
  const intervalId = setInterval(() => setIndex((index) => (index + 1) % HeadOne.length), 1000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Grid className="right-compound">
      <TextTransition
        text={HeadOne[index]}
        springConfig={presets.stiff}
        noOverflow
        className="heavy-text"
      />
      <Typography className="heavy-text">{firstSectionInfo.headTwo}</Typography>
      <img src={Logo} className="section-one-logo" alt="logo"/>
      <Grid className="desc-container mobile-hidden">
        <Typography className="desc-text">
          {firstSectionInfo.descOne}
        </Typography>
      </Grid>
      <Grid className="desc-container mobile-hidden">
        <Typography className="desc-text bold-600">
          {firstSectionInfo.descTwo}
        </Typography>
      </Grid>
      <Grid className="desc-container mobile-hidden">
         {firstSectionInfo.payment_method.map((pay, index) => {
             return <Button className="desc-button bold-600" key={index}> {pay}</Button>
         })
         }
      </Grid>

    </Grid>
  );
};

export default RightCompoundMobile;
