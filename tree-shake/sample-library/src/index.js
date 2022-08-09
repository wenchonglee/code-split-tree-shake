import { short_string } from "./short_string";
import { SUPER_LONG_STRING } from "./super_long_string";

// This will not be tree shakable
export default { short_string, SUPER_LONG_STRING };

// This is tree shakable
export { short_string, SUPER_LONG_STRING };
