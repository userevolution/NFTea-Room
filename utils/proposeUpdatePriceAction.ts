import { Contract } from "@ethersproject/contracts";
import { ThreadID } from "@textile/hub";
import { BigNumber } from "ethers";
import ProposeUpdatePriceActionOptions from "../modals/proposeUpdatePriceActionOptions";
import { dbCollectionID, dbThreadID, Suggestion } from "../textile-helpers";

// Propose an action to the Minion (returns proposalId)
export default async function proposeUpdatePriceAction(
  instance: Contract,
  textileClient: any,
  options: ProposeUpdatePriceActionOptions
): Promise<any> {
  try {
    let response = await instance.proposeAction(
      options.actionTo,
      "3000000000000000",
      options.nftId,
      options.price,
      options.details,
      options.paymentRequested,
      options.sharesRequested,
      {
        gasLimit: 400000,
      }
    );

    let result = await response.wait();

    let proposalId: number = 0;

    for (let event of result.events) {
      if (event.event === "ProposeAction") {
        console.log(event.event);
        proposalId = (event.args[0] as BigNumber).toNumber();
        break;
      }
    }

    console.log(`Proposed action successfully! Proposal ID: ${proposalId}`);

    const suggestion: Suggestion = {
      nft_id: options.nftId.toString(),
      new_price: options.price,
      comments: [],
      proposal_id: proposalId,
      proposal_index: -1,
    };

    await textileClient.create(
      ThreadID.fromString(dbThreadID),
      dbCollectionID,
      [suggestion]
    );

    return proposalId;
  } catch (e) {
    console.error(e);
  }
}