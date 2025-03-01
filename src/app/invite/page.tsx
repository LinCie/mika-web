import { redirect } from "next/navigation";

export default async function Invite() {
  return redirect(
    "https://discord.com/oauth2/authorize?client_id=1312578502851035166&permissions=3148800&integration_type=0&scope=bot"
  );
}
