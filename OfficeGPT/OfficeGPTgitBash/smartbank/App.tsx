import { NavigationContainer } from "@react-navigation/native";
import AuthProvider, { useAuth } from "./features/auth/AuthContext";
import { LoginStack } from "./navigation/LoginStack";
import { MainStack } from "./navigation/MainStack";
import React from 'react';

import PersistentNotification from './eventTracking/NotificationService';
import { EventProvider, useEvent } from './EventContext';

function Router() {
  const { authStatus } = useAuth();

  return authStatus === "signed-in" ? <MainStack /> : <LoginStack />;
}

export default function App() {
  return (
    <EventProvider>
      <NavigationContainer>
        <AuthProvider>
          <Router />
          <NotificationWrapper />
        </AuthProvider>
      </NavigationContainer>
    </EventProvider>
  );
}

function NotificationWrapper() {
  const { eventData } = useEvent(); // Retrieve event data

  return (
    <PersistentNotification message={`${eventData}`} />
  );
}
