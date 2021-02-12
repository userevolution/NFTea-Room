// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class GetPrice extends ethereum.Event {
  get params(): GetPrice__Params {
    return new GetPrice__Params(this);
  }
}

export class GetPrice__Params {
  _event: GetPrice;

  constructor(event: GetPrice) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get message(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class UpdatedPrice extends ethereum.Event {
  get params(): UpdatedPrice__Params {
    return new UpdatedPrice__Params(this);
  }
}

export class UpdatedPrice__Params {
  _event: UpdatedPrice;

  constructor(event: UpdatedPrice) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get oldPrice(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newPrice(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get message(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  minion(): Address {
    let result = super.call("minion", "minion():(address)", []);

    return result[0].toAddress();
  }

  try_minion(): ethereum.CallResult<Address> {
    let result = super.tryCall("minion", "minion():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  nfts(param0: BigInt): BigInt {
    let result = super.call("nfts", "nfts(uint64):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_nfts(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("nfts", "nfts(uint64):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _minion(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class GetPriceCall extends ethereum.Call {
  get inputs(): GetPriceCall__Inputs {
    return new GetPriceCall__Inputs(this);
  }

  get outputs(): GetPriceCall__Outputs {
    return new GetPriceCall__Outputs(this);
  }
}

export class GetPriceCall__Inputs {
  _call: GetPriceCall;

  constructor(call: GetPriceCall) {
    this._call = call;
  }

  get _nftId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class GetPriceCall__Outputs {
  _call: GetPriceCall;

  constructor(call: GetPriceCall) {
    this._call = call;
  }
}

export class UpdatePriceCall extends ethereum.Call {
  get inputs(): UpdatePriceCall__Inputs {
    return new UpdatePriceCall__Inputs(this);
  }

  get outputs(): UpdatePriceCall__Outputs {
    return new UpdatePriceCall__Outputs(this);
  }
}

export class UpdatePriceCall__Inputs {
  _call: UpdatePriceCall;

  constructor(call: UpdatePriceCall) {
    this._call = call;
  }

  get _nftId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdatePriceCall__Outputs {
  _call: UpdatePriceCall;

  constructor(call: UpdatePriceCall) {
    this._call = call;
  }
}
