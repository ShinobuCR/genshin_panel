import { Attribute } from "../../attribute/attribute"
import { Param } from "../param";

function apply2(attribute: Attribute, params: Param) {
    attribute.curedEffect += 0.2;
}

function apply4(attribute: Attribute, params: Param) {

}

export default [null, apply2, null, apply4, null];