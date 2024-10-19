import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { supabase } from "../utils/supabase";

type UserType = "admin" | "mentor" | "student";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<UserType>("student");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
  
    try {
      console.log(email, password, userType);
      // Sign in the user
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
  
      if (error) throw error;
  
      if (data.user) {
        // Check user type and redirect accordingly
        let userTable = userType; // "admin", "mentor", or "student"
        let userData;
  
        // Fetch user data from the appropriate table based on userType
        const { data: fetchedUserData, error: userError } = await supabase
          .from(userTable)
          .select("*")
          .eq("email", email)
          .single();
  
        if (userError) {
          // Handle user error (for example, user not found in the specified table)
          if (userError.message.includes("no rows")) {
            throw new Error(`User not found in ${userTable} table`);
          }
          throw userError;
        }
  
        userData = fetchedUserData;
  
        if (userData) {
          console.log(`Logged in as ${userType}:`, userData);
          // Redirect to appropriate dashboard based on user type
          // Implement your routing logic here
        }
      }
    } catch (error) {
      setError((error as Error).message);
    }
  };
  

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            User Type:
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value as UserType)}
            >
              <option value="admin">Admin</option>
              <option value="mentor">Mentor</option>
              <option value="student">Student</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
