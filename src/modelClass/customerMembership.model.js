export default class CustomerMembership {
    constructor(uuid, customerName, membershipId, pointToReach, currentPoint, expiryDate, startDate, duration,membershipCode,status,reward) {
      this.uuid = uuid; //uuid refer to email of current user.
      this.customerName = customerName;
      this.membershipId = membershipId;
      this.pointToReach = pointToReach;
      this.currentPoint = currentPoint;
      this.expiryDate = expiryDate;
      this.startDate = startDate;
      this.reward = reward;
      this.duration = duration;
      this.membershipCode = membershipCode;//Unique generated.
      this.status = status;
    }
  }