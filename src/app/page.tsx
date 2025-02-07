"use client"

import Posts from "@/components/Posts";
import Container from "@/components/ui/Container";

export default function Home() {
  return (
    <Container>
      <h1 className="text-primary">Welcome to SocialJSON</h1>
      <Posts />
    </Container>
  );
}
