"use client";

import NotFound from "@/app/not-found";
import { protectedRoutes, routes } from "@/resources";
import { Button, Column, Flex, Heading, PasswordInput, Spinner } from "@once-ui-system/core";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface RouteGuardProps {
  children: React.ReactNode;
}

function isRouteEnabled(pathname: string | null) {
  if (!pathname) return false;

  if (pathname in routes) {
    return routes[pathname as keyof typeof routes];
  }

  const dynamicRoutes = ["/blog", "/work"] as const;
  return dynamicRoutes.some((route) => pathname.startsWith(route) && routes[route]);
}

function RouteGuard({ children }: RouteGuardProps) {
  const pathname = usePathname();
  const routeEnabled = isRouteEnabled(pathname);
  const isPasswordRequired = Boolean(
    pathname && protectedRoutes[pathname as keyof typeof protectedRoutes],
  );
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);
  const [authState, setAuthState] = useState<{
    path: string | null;
    authenticated: boolean;
  }>({ path: null, authenticated: false });
  const checkingAuth = isPasswordRequired && authState.path !== pathname;
  const isAuthenticated = authState.path === pathname && authState.authenticated;

  useEffect(() => {
    if (!isPasswordRequired) return;

    let cancelled = false;
    fetch("/api/check-auth")
      .then((response) => response.ok)
      .catch(() => false)
      .then((authenticated) => {
        if (!cancelled) setAuthState({ path: pathname, authenticated });
      });

    return () => {
      cancelled = true;
    };
  }, [pathname, isPasswordRequired]);

  async function handlePasswordSubmit() {
    const response = await fetch("/api/authenticate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      setAuthState({ path: pathname, authenticated: true });
      setError(undefined);
    } else {
      setError("Incorrect password");
    }
  }

  if (!routeEnabled) {
    return <NotFound />;
  }

  if (isPasswordRequired && checkingAuth) {
    return (
      <Flex fillWidth paddingY="128" horizontal="center">
        <Spinner />
      </Flex>
    );
  }

  if (isPasswordRequired && !isAuthenticated) {
    return (
      <Column paddingY="128" maxWidth={24} gap="24" center>
        <Heading align="center" wrap="balance">
          This page is password protected
        </Heading>
        <Column fillWidth gap="8" horizontal="center">
          <PasswordInput
            id="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            errorMessage={error}
          />
          <Button onClick={handlePasswordSubmit}>Submit</Button>
        </Column>
      </Column>
    );
  }

  return <>{children}</>;
}

export { RouteGuard };
