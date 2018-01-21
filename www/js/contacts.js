var contactsList = {};
var contacts = {
	listAll: function()
	{
		console.log("Récupération des contacts...");
		$('#recuperer_contacts').hide();
		$('#chargement').show();
		$('#list').empty();
		navigator.contacts.find(
			['id', 'displayName', 'name', 'phoneNumbers'],
			function(contacts)
			{
				var contact_name;
				var contact_phone;
				for(var i = 0; i < contacts.length; i++)
				{
					if (contacts[i].name.formatted != null && contacts[i].name.formatted != undefined)
					{								
						contact_name = contacts[i].name.formatted;
						contact_name = contact_name.replace(/'/g,"''");
						
						if (contacts[i].phoneNumbers != null && contacts[i].phoneNumbers.length > 0
						&& contacts[i].phoneNumbers[0].value != null && contacts[i].phoneNumbers[0].value != undefined)
							contact_phone = contacts[i].phoneNumbers[0].value;
						else
							contact_phone = "Pas de numéro";
						
						$('#list').append('<a class="contact-link" href="#" onclick="javascript:contacts.showContact(' + contacts[i].id + ')">'
							+ '<i class="fa fa-user"></i> ' + contact_name + '</a>');
						$('#contacts').append('<div class="contact_' + contacts[i].id + '">'
							+ '<div class="name">' + contact_name + '</div>'
							+ '<div class="phone">' + contact_phone + '</div>'
							+ '</div>');
						
						if (i >= 10) break;
					}
				}
				
				$('#chargement').hide();
			}, function(error)
			{
				$('#chargement').hide();
				alert(error);
			},
			{ filter: "", multiple: true }
		);
	},
	showContact: function(id)
	{
		$('#list').hide();
		$('#contacts .contact_' + id).show();
		$('#retour').show();
		<!-- window.location.replace("contact.html"); -->
	},
	retourListe: function()
	{
		$('#contacts > div').hide();
		$('#list').show();
		$('#retour').hide();
	}
};