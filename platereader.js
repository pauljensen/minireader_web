
$(document).ready(function() {
	var add_reader_table = function(div) {
		$.ajax('cgi-bin/queryReaders.py', {
			success: function(data) {
				s = '<table class="table table-bordered"><thead><tr>' + 
					'<td><b>Reader</b></td>' + 
				    '<td><b>Connection</b></td>' + 
				    '<td><b>Status</b></td>' + 
				    '</tr></thead><tbody>';
				for (reader in data) {
					s += '<td>' + reader + '</td>';
					if (data[reader].connected) {
						s += '<td class="success">Connected</td>';
					} else {
						s += '<td class="danger">Not Connected</td>';
					}
					if (data[reader].status == 'available') {
						s += '<td class="success">Available</td>';
					} else if (data[reader].status == 'busy') {
						s += '<td class="warning">In Use</td>';
					} else {
						s += '<td class="active"></td>';
					}
					s += '</tr>'
				}
				s += '</tbody></table>';
				div.html('<p class="lead">Currently connected readers:</p>' +
						 '<a class="btn btn-default" id="readerRefresh" href="#">Refresh</a>');
				$('#readerRefresh').click(function() {add_reader_table(div)});
				div.append(s);
			},
			error: function() {
				alert('error connecting');
			}
		});
	};

	$('#devices').html('<button type="button" id="find" class="btn btn-primary btn-lg btn-block">Get Readers</button>');
	$('#find').click(function() {add_reader_table($('#devices'))});
})
