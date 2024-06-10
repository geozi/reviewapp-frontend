/**
 * Represents a review added by a user.
 * @property {string} username - The username of the user adding the review.
 * @property {string} subject - The subject of the review.
 * @property {string} description - The main body of the review.
 * @author geozi
 * @version 1
 */
export interface Review {
  username: string;
  subject: string;
  description: string;
}
