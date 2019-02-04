package com.rs.clientconnect.model;

import java.util.List;

public class Profile {
	
	private Integer id;
	private String profileName;
	private String loadLevel;
	private String roleDescription;
	
	List<Role> roles;
	
	

	public Profile(Integer id, String profileName, String loadLevel, String roleDescription) {
		super();
		this.id = id;
		this.profileName = profileName;
		this.loadLevel = loadLevel;
		this.roleDescription = roleDescription;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getProfileName() {
		return profileName;
	}

	public void setProfileName(String profileName) {
		this.profileName = profileName;
	}

	public String getLoadLevel() {
		return loadLevel;
	}

	public void setLoadLevel(String loadLevel) {
		this.loadLevel = loadLevel;
	}

	public String getRoleDescription() {
		return roleDescription;
	}

	public void setRoleDescription(String roleDescription) {
		this.roleDescription = roleDescription;
	}
/*
	public List<Role> getRoles() {
		return roles;
	}

	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}
	
	*/

	
	
	
}
