import { FreeTrialWrapper } from "./FreeTrial.styles"
import { Container, HeadingTitle, Paragraph } from "../../../styles/global/default";
import { BaseLinkPrimary } from "../../../styles/components/Button"

const FreeTrial = () => {
  return (
    <FreeTrialWrapper className="section-py">
      <Container>
        <div className="free-trial-content bg-black06 flex items-center justify-between flex-wrap">
            <div>
                <HeadingTitle>Start And watch your free trial today!</HeadingTitle>
                <Paragraph>
                    This is a certainly clear and concise all to action takes  that encouragesto the  users to sign up for a free trial get more funnt and comedyd of StreamVibe.
                </Paragraph>
            </div>
            <BaseLinkPrimary>Start  Free Trial For more</BaseLinkPrimary>
        </div>
      </Container>
    </FreeTrialWrapper>
  )
}

export default FreeTrial
