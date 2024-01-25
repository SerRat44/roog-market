import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import logo from "../../assets/roog logo x20.png";

const Wrapper = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingBottom: 24,
  [theme.breakpoints.down("md")]: {
    h5: {
      fontSize: 20,
      margin: 0,
    },
  },
}));

export default function Header() {
  return (
    <Wrapper>
      <img src={logo} alt="" width={"70%"} />
      <Typography variant="h3">Roog Market</Typography>
      <hr />
      <Typography variant="h7">
        <b>
          50k (5% of supply) ROOG to start the pool off, up to 8% daily return,
          12% referral.
          <br />
          HOW IT WORKS: <br />
          Contract: This is the total amount of $ROOG in the contract <br />
          1. You buy shares with $ROOG and gain a dynamic $ROOG income for your
          shares. <br />
          2. Bought shares are added to the contract and the contract grows
          <br />
          3. You can compound your rewards to gain more shares and increase your
          daily rewards. <br />
          4. You can withdraw your rewards at any time. <br />
          5. You earn as long as there is $ROOG in the contract. <br />
          You can use your refferal link to earn 12% off the deposit. <br />
        </b>
      </Typography>
      <br />
      <br />
      <Button
        variant="contained"
        className="custom-button"
        href="https://jup.ag/swap/USDC-ROOG_8N3ZkCwRe36Cj1PqXaMw2h92yzSy18L1z6sptQMiQGrr"
      >
        Buy $ROOG
      </Button>
    </Wrapper>
  );
}
