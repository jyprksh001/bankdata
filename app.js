var GoogleSpreadsheet = require("google-spreadsheet");
// spreadsheet key is the long id in the sheets URL 
var my_sheet = new GoogleSpreadsheet('1L9yV3iZdDqMnkaZg5dfulSfYkI7mp4L2ow6-Omfwdjo');
 //console.log(my_sheet);
 /*
 my_sheet
 {
 	setAuthToken: [Function],
  	setAuth: [Function],
  	useServiceAccountAuth: [Function],
  	makeFeedRequest: [Function],
  	getInfo: [Function],
  	getRows: [Function],
  	addRow: [Function],
  	getCells: [Function] 
 }
*/

// With auth -- read + write  
var creds = require('./spreadsheetKey.json');
my_sheet.useServiceAccountAuth(creds, function(err){
	my_sheet.getInfo( function( err, sheet_info ){
		//console.log(sheet_info);
		/*
		sheet_info
		{ title: 'remitr',
		  updated: '2015-12-07T19:23:18.254Z',
		  author: { name: 'fonefood.in', email: 'fonefood.in@gmail.com' },
		  worksheets: [ { id: 'od6',
						  title: 'Sheet1',
				       	  rowCount: '1000',
				          colCount: '26',
				          getRows: [Function],
				          getCells: [Function],
				          addRow: [Function] 
				       } ] 
		}
		*/

		var sheet = sheet_info.worksheets;
		console.log(sheet);
		/*
		sheet_info
		{ worksheets: [ { id: 'od6',
							    title: 'Sheet1',
							    rowCount: '1000',
							    colCount: '26',
							    getRows: [Function],
							    getCells: [Function],
							    addRow: [Function] 
						},
							  
						{ id: 'o694zrw',
							    title: 'Sheet2',
							    rowCount: '1000',
							    colCount: '26',
							    getRows: [Function],
							    getCells: [Function],
							    addRow: [Function] 
						} 
					]

		}
		*/		
		sheet[0].getRows( function( err, rows ){
			//console.log(rows);
		/*
		[ 
			{ 
			_xml: '<entry><id>https://spreadsheets.google.com/feeds/list/1L9yV3iZdDqMnkaZg5dfulSfYkI7mp4L2ow6-Omfwdjo/od6/private/full/cokwr</id><updated>2015-12-07T19:23:18.254Z</updated><category scheme=\'http://schemas.google.com/spreadsheets/2006\' term=\'http://schemas.google.com/spreadsheets/2006#list\'/><title type=\'text\'>hi</title><content type=\'text\'>is: hi, pankaj: aaaa</content><link rel=\'self\' type=\'application/atom+xml\' href=\'https://spreadsheets.google.com/feeds/list/1L9yV3iZdDqMnkaZg5dfulSfYkI7mp4L2ow6-Omfwdjo/od6/private/full/cokwr\'/><link rel=\'edit\' type=\'application/atom+xml\' href=\'https://spreadsheets.google.com/feeds/list/1L9yV3iZdDqMnkaZg5dfulSfYkI7mp4L2ow6-Omfwdjo/od6/private/full/cokwr/dpa9gf2ojdo8\'/><gsx:asshole>hi</gsx:asshole><gsx:is>hi</gsx:is><gsx:pankaj>aaaa</gsx:pankaj></entry>',
		    id: 'https://spreadsheets.google.com/feeds/list/1L9yV3iZdDqMnkaZg5dfulSfYkI7mp4L2ow6-Omfwdjo/od6/private/full/cokwr',
			title: 'hi',
			content: 'is: hi, pankaj: aaaa',
			_links: 
		 	[ self: 'https://spreadsheets.google.com/feeds/list/1L9yV3iZdDqMnkaZg5dfulSfYkI7mp4L2ow6-Omfwdjo/od6/private/full/cokwr',
		   	edit: 'https://spreadsheets.google.com/feeds/list/1L9yV3iZdDqMnkaZg5dfulSfYkI7mp4L2ow6-Omfwdjo/od6/private/full/cokwr/dpa9gf2ojdo8' ],
			asshole: 'hi',is: 'hi',pankaj: 'aaaa',save: [Function],del: [Function] 
			},
			{
			 _xml: '<entry><id>https://spreadsheets.google.com/feeds/list/1L9yV3iZdDqMnkaZg5dfulSfYkI7mp4L2ow6-Omfwdjo/od6/private/full/cpzh4</id><updated>2015-12-07T19:23:18.254Z</updated><category scheme=\'http://schemas.google.com/spreadsheets/2006\' term=\'http://schemas.google.com/spreadsheets/2006#list\'/><title type=\'text\'>hi</title><content type=\'text\'>is: h1, pankaj: hddjd</content><link rel=\'self\' type=\'application/atom+xml\' href=\'https://spreadsheets.google.com/feeds/list/1L9yV3iZdDqMnkaZg5dfulSfYkI7mp4L2ow6-Omfwdjo/od6/private/full/cpzh4\'/><link rel=\'edit\' type=\'application/atom+xml\' href=\'https://spreadsheets.google.com/feeds/list/1L9yV3iZdDqMnkaZg5dfulSfYkI7mp4L2ow6-Omfwdjo/od6/private/full/cpzh4/hlp9m8nak9jam\'/><gsx:asshole>hi</gsx:asshole><gsx:is>h1</gsx:is><gsx:pankaj>hddjd</gsx:pankaj></entry>',
		    id: 'https://spreadsheets.google.com/feeds/list/1L9yV3iZdDqMnkaZg5dfulSfYkI7mp4L2ow6-Omfwdjo/od6/private/full/cpzh4',
		    title: 'hi',
		    content: 'is: h1, pankaj: hddjd',
		    _links: 
		    [ self: 'https://spreadsheets.google.com/feeds/list/1L9yV3iZdDqMnkaZg5dfulSfYkI7mp4L2ow6-Omfwdjo/od6/private/full/cpzh4',
		    edit: 'https://spreadsheets.google.com/feeds/list/1L9yV3iZdDqMnkaZg5dfulSfYkI7mp4L2ow6-Omfwdjo/od6/private/full/cpzh4/hlp9m8nak9jam' ],
		    asshole: 'hi',
		    is: 'h1',
		    pankaj: 'hddjd',
		    save: [Function],
		    del: [Function] 
		  	} 
		]
		*/
		//	rows[0].save();	//async and takes a callback 
		//  rows[0].del();  //async and takes a callback
		var new_row={a:"gname",b:"pname",c:"kumar"} 
		sheet[0].addRow(new_row,function(err,data){
			if(err) throw (err);
			console.log("spreadsheet updated")
			})

		});

	});
})

/*

*/





