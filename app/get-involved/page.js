import { redirect } from "next/navigation";

// The participant recruitment content now lives on the homepage (under the
// "Participate" nav link), so anyone who still has this URL bookmarked or
// shared gets sent there instead of a 404.
export default function GetInvolvedRedirect() {
  redirect("/");
}
