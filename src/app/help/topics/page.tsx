import { redirect } from "next/navigation";

/**
 * `/help/topics` has no page of its own — the hub already lists every topic, and
 * a second grid of the same cards would be a duplicate to maintain and for
 * search engines to weigh against each other.
 *
 * It exists because the URL is guessable: someone reading `/help/topics/recording`
 * will trim the last segment. Landing on a 404 there is a small, avoidable
 * indignity, so it redirects to the page that answers the intent.
 */
export default function HelpTopicsIndex() {
  redirect("/help");
}
