package com.rs.clientconnect.web;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.rs.clientconnect.model.Profile;
import com.rs.clientconnect.model.Role;

public class ProfileServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public ProfileServlet() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		
		List<Profile> profiles = getProfiles();
		System.out.println("profiles size:"+profiles.size());
		
		String json = new Gson().toJson(profiles);
		response.getWriter().write(json);
		
	}



	private List<Profile> getProfiles() {

		
		List<Profile> profiles = new ArrayList<Profile>();
		
		Profile profile1 = new Profile(9001, "Trend FSD", "Level Load", "Profile Description");
		Profile profile2 = new Profile(9002, "Transaction FSD", "Level Load", "Profile Description");
		Profile profile3 = new Profile(9003, "Advisory", "Level Load", "Profile Description");
		
		/*Profile profile1 = new Profile(9001, "Trend FSD", "Level Load", "Profile Description",  createRoles());
		Profile profile2 = new Profile(9002, "Transaction FSD", "Level Load", "Profile Description",  createRoles());
		Profile profile3 = new Profile(9003, "Advisory", "Level Load", "Profile Description",  createRoles());*/
		
		profiles.add(profile1);profiles.add(profile2);profiles.add(profile3);
		
		return profiles;
	}
	
	private List<Role> createRoles() {

		
		List<Role> roles = new ArrayList<Role>();
		
		Role role1 = new Role(101, "Database Role", "Role for Database");
		Role role2 = new Role(102, "Outlook Role", "Role for Outlook");
		Role role3 = new Role(103, "Browser Role", "Role for Browser");
		
		roles.add(role1);roles.add(role2);roles.add(role3);
		
		return roles;
	}
}
