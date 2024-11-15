export const isAuthenticated = (): boolean => {
    // Placeholder: Replace with actual auth logic later
    return !!localStorage.getItem('authToken');
  };
  