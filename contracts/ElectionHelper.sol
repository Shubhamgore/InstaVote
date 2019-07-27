pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;
import "./Election.sol";

contract ElectionHelper is Election {

    function generateElection(uint256 _duration) external {
        StartTime = block.timestamp;
        ElectionDuration = _duration;
    }

    function assignCandidateToConstituency(uint256 _id, uint256 _constituencyId) private {
        candidateToConstituency[_id] = _constituencyId;
        constituencyCandidateCount[_constituencyId]++;
    }

    function getCandidatesByConstituency(uint256 _constituencyId) public view returns(Candidate[] memory) {
        Candidate[] memory _candidates = new Candidate[](constituencyCandidateCount[_constituencyId]);
        uint counter = 0;
        for(uint i = 0; i < candidates.length; i++) {
            if(candidateToConstituency[candidates[i]._id] == _constituencyId) {
            _candidates[counter] = candidates[i];
            counter++;
        }
    }

        return _candidates;
    }
}