import { formatDistanceToNow } from "date-fns";

export function getTimeDifference(timestamp) {
  const timeAgo = formatDistanceToNow(new Date(timestamp), { addSuffix: true });
  return timeAgo;
}
