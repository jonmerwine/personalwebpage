var ct = 0;

$(document).ready(function()
{
    /*Hide the header on start*/
    $("#header").hide();
    /*Hide home images for later animation*/
    $("#homeInfo").hide();
    $("#contactMe").hide();
    $("#guitar").hide();
    $("#computer").hide();
    $("#lehigh").hide();
    /*Hide info divs in the About section for animation on screen hover over*/
    $("#info1").hide();
    $("#info2").hide();
    $("#info3").hide();
    $("#info4").hide();
    $("#info5").hide();
    $("#info6").hide();
    /*Hide navigation buttons in About section*/
    $("#nextDiv").hide();
    $("#prevDiv").hide();
    $("#community").hide();

    /*Create randomly generated shooting stars across the entire site*/
    var shootingStarObj = new ShootingStar("body");
    shootingStarObj.launch();
    /*Center the Explore button at the start screen*/
    $("#explore").css("left", 9000 + $(window).width() / 2 - 250 / 2);
    /*Set the start frame to the start screen*/
    $('html, body').animate({scrollTop: $("#start").offset().top}, 0);
    $('html, body').animate({scrollLeft: $("#start").offset().left}, 0);
    /*Create a pop up dialog for the youtube music video*/
    $("#dia").dialog({
        width: 460,
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "blind",
            duration: 1000
        }
    });
    /*Create a pop up dialog for my resume*/
    $("#resume").dialog({
        width: parseInt($(window).width()),
        height: parseInt($(window).height() - 60),
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "blind",
            duration: 1000
        }
    });
    /*On click of the About button in the navigation tab - animate to the About screen from wherever
     * you currently are on the document*/
    $("#aboutClick").on('click', function()
    {
        //About TOP: 2500 LEFT: 0
        var top = $(document).scrollTop();
        var left = $(document).scrollLeft();
        if (top !== 2500)
        {
            $('html, body').animate({scrollTop: $("#about").offset().top}, 2000);
        }
        if (left !== 0)
        {
            $('html, body').animate({scrollLeft: $("#about").offset().left}, 2000);
        }
    });
    /*On click of the Interests button in the navigation tab - animate to the Interests screen from wherever
     * you currently are on the document*/
    $("#interestsClick").on('click', function()
    {
        //About TOP: 0 LEFT: 0
        var top = $(document).scrollTop();
        var left = $(document).scrollLeft();
        if (top !== 0)
        {
            $('html, body').animate({scrollTop: $("#interests").offset().top}, 2000);
        }
        if (left !== 0)
        {
            $('html, body').animate({scrollLeft: $("#interests").offset().left}, 2000);
        }
    });

    /*On click of the Contact button in the navigation tab - animate to the Contact screen from wherever
     * you currently are on the document*/
    $("#contactClick").on('click', function()
    {
        //About TOP: 5000 LEFT: 0
        var top = $(document).scrollTop();
        var left = $(document).scrollLeft();
        if (top !== 5000)
        {
            $('html, body').animate({scrollTop: $("#contact").offset().top}, 2000);
        }
        if (left !== 0)
        {
            $('html, body').animate({scrollLeft: $("#contact").offset().left}, 2000);
        }
    });
    /*On click of the Home button in the navigation tab - animate to the Home screen from wherever
     * you currently are on the document*/
    $("#homeClick").on('click', function()
    {
        //About TOP: 2500 LEFT: 3000
        var top = $(document).scrollTop();
        var left = $(document).scrollLeft();
        if (top !== 2500)
        {
            $('html, body').animate({scrollTop: $("#home").offset().top}, 2000);
        }
        if (left !== 3000)
        {
            $('html, body').animate({scrollLeft: $("#home").offset().left}, 2000);
        }
    });
    /*On click of the Portfolio button in the navigation tab - animate to the Portfolio screen from wherever
     * you currently are on the document*/
    $("#professionalClick").on('click', function()
    {
        //About TOP: 5000 LEFT: 3000
        var top = $(document).scrollTop();
        var left = $(document).scrollLeft();
        if (top !== 5000)
        {
            $('html, body').animate({scrollTop: $("#professional").offset().top}, 2000);
        }
        if (left !== 3000)
        {
            $('html, body').animate({scrollLeft: $("#professional").offset().left}, 2000);
        }
    });

    /************HOVER LISTENERS************/
    /*Position the computer image in the Home screen and animate on hover*/
    $("#computer").hover(function()
    {
        $(this).animate({top: "3000"});
        $(this).css({opacity: 1});
    },
            function() {
                $(this).animate({top: "2950"});
                $(this).css({opacity: 0.7});
            }
    );

    /*Animate the contactMe image in the Home section on hover*/
    $("#contactMe").hover(function()
    {
        $(this).animate({top: "2610"});
        $(this).css({opacity: 1});
    },
            function() {
                $(this).animate({top: "2550"});
                $(this).css({opacity: 0.7});
            }
    );

    /*Animate the lehigh image in the Home section on hover*/
    $("#lehigh").hover(function()
    {
        $(this).animate({top: "2900"});
        $(this).css({opacity: 1});
    },
            function() {
                $(this).animate({top: "2950"});
                $(this).css({opacity: 0.7});
            }
    );

    /*Animate the screen image in the About section on hover, cascade the aparation of info divs*/
    $("#screen").hover(function()
    {
        $(this).attr("src", "images/jon.png");
        $("#info1").show("slow", function()
        {
            $("#info2").show("slow", function()
            {
                $("#info3").show("slow", function()
                {
                    $("#info4").show("slow", function()
                    {
                        $("#info5").show("slow", function()
                        {
                            $("#info6").show("slow", function()
                            {
                                $("#nextDiv").show("slow", function()
                                {

                                });
                            });
                        });
                    });
                });
            });
        });
    });

    /*Animate the world image in the Contact section on hover*/
    $("#world").hover(function()
    {
        $(this).animate({top: "-65"});
        $(this).css({opacity: 1});
    },
            function() {
                $(this).animate({top: "0"});
                $(this).css({opacity: 0.85});
            }
    );

    /*Animate the metal image in the Interests section on hover*/
    $("#metal").hover(function()
    {
        $(this).stop();
        $(this).animate({
            width: '660px',
            height: '220px'
        }, 200);
    }, function() {
        //handle mouse out
        $(this).stop();
        $(this).animate({
            width: '600px',
            height: '200px'
        }, 200);
    });

    /*Position the galaxy image in the Home screen and animate on hover*/
    $("#galaxy").hover(function()
    {
        $(this).animate({top: "-15"});
        $(this).css({opacity: 1});
    },
            function() {
                $(this).animate({top: "0"});
                $(this).css({opacity: 0.85});
            }
    );

    /*Position the guitar image in the Home screen and animate on hover*/
    $("#guitar").hover(function()
    {
        $(this).animate({top: "2675"});
        $(this).css({opacity: 1});
    },
            function() {
                $(this).animate({top: "2650"});
                $(this).css({opacity: 0.7});
            }
    );

    /*Animate the phone image in the Interests section on hover*/
    $("#phone").hover(function()
    {
        $(this).animate({top: "300"});
        $(this).css({opacity: 1});
    },
            function() {
                $(this).animate({top: "330"});
                $(this).css({opacity: 0.7});
            }
    );

    /*Animate the bball2 image in the Interests section on hover*/
    $("#bball2").hover(function()
    {
        $(this).animate({top: "100"});
        $(this).css({opacity: 1});
    },
            function() {
                $(this).animate({top: "70"});
                $(this).css({opacity: 0.7});
            }
    );

    /*Animate the explore image in the Start section on hover*/
    $("#explore").hover(function()
    {
        $(this).css({opacity: 0.7});
    },
            function() {
                $(this).css({opacity: 1});
            }
    );

    /*Animate the brain image in the Interests section on hover*/
    $("#brain").hover(function()
    {
        $(this).stop();
        $(this).animate({
            left: '800px'
        }, 200);
        $(this).animate({
            left: '840px'
        }, 200);
        $(this).animate({
            left: '820px'
        }, 200);
    }, function() {
        //handle mouse out
        $(this).stop();
    });

    /*Animate the cv image in the Portfolio section on hover*/
    $("#cv").hover(function()
    {
        $(this).stop();
        $(this).animate({
            left: '3575px',
            top: '5075px',
            width: '290px',
            height: '290px',
            opacity: '1'
        }, 200);
    }, function() {
        //handle mouse out
        $(this).stop();
        $(this).animate({
            left: '3600px',
            top: '5100px',
            width: '250px',
            height: '250px',
            opacity: '0.7'
        }, 200);
    });

    /*Animate the nextDiv image in the About section on hover*/
    $("#nextDiv").hover(function()
    {
        $(this).stop();
        $(this).animate({
            opacity: '1'
        }, 200);
    }, function() {
        //handle mouse out
        $(this).stop();
        $(this).animate({
            opacity: '0.7'
        }, 200);
    });

    /*Animate the github image in the Portfolio section on hover*/
    $("#github").hover(function()
    {
        $(this).stop();
        $(this).animate({
            width: '560px',
            height: '560px',
            opacity: '1'
        }, 200);
    }, function() {
        //handle mouse out
        $(this).stop();
        $(this).animate({
            width: '512px',
            height: '512px',
            opacity: '0.7'
        }, 200);
    });

    /*Animate the github image in the Portfolio section on hover*/
    $("#community").hover(function()
    {
        $(this).stop();
        $(this).animate({
            width: '327px',
            height: '330px',
            opacity: '1'
        }, 200);
    }, function() {
        //handle mouse out
        $(this).stop();
        $(this).animate({
            width: '297px',
            height: '299px',
            opacity: '0.7'
        }, 200);
    });

    /*Animate the linkedin image in the Portfolio section on hover*/
    $("#linkedin").hover(function()
    {
        $(this).stop();
        $(this).animate({
            left: '3506px',
            top: '5306px',
            width: '300px',
            height: '300px',
            opacity: '1'
        }, 200);
    }, function() {
        //handle mouse out
        $(this).stop();
        $(this).animate({
            left: '3550px',
            top: '5350px',
            width: '256px',
            height: '256px',
            opacity: '0.7'
        }, 200);
    });

    /************CLICK LISTENERS************/

    /*On click of the guitar image navigate to the Interests screen*/
    $("#guitar").click(function()
    {
        $("#interestsClick").trigger("click");
    });

    $("#contactMe").click(function()
    {
        $("#contactClick").trigger("click");
    });

    $("#linkedin").click(function()
    {
        window.open("http://www.linkedin.com/pub/jon-merwine/41/3b4/698");
    });

    $("#cv").click(function()
    {
        $("#resume").dialog("open");
    });

    $("#metal").click(function()
    {
        $("#dia").dialog("open");
    });

    $("#community").click(function()
    {
        window.open("http://www4.lehigh.edu/housing/residencehalls/aztypes/coding.aspx");
    });

    $("#phone").click(function()
    {
        window.open("https://play.google.com/store/apps/details?id=com.merwine.gpacalculator");
    });

    $("#github").click(function()
    {
        window.open("https://github.com/jonmerwine");
    });

    $("#lehigh").click(function()
    {
        $("#aboutClick").trigger("click");
    });

    $("#sub").click(function()
    {
        var temp = $(this).css("textIndent");
        temp = parseInt(temp);
        $('#email').animate({textIndent: -45}, {
            step: function(now, fx) {
                $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
            },
            duration: 'slow'
        }, 'linear');
        $("#email").animate({left: "-2000"});
    });


    /*On click of the computer image navigate to the Portfolio screen*/
    $("#computer").click(function()
    {
        $("#professionalClick").trigger("click");
    });

    $("#explore").click(function()
    {
        $("#header").show("slow");
        $("#topdoor").animate({
            top: '-1500px'
        }, {duration: 2000, queue: false});
        $("#bottomdoor").animate({
            top: '5800px'
        }, {duration: 2000, queue: false});
        $(this).hide("slow", function()
        {
            $('html, body').animate({scrollLeft: $("#home").offset().left}, 2000, function()
            {
                $("#guitar").show("slow", function()
                {
                    $("#contactMe").show("slow", function()
                    {
                        $("#computer").show("slow", function()
                        {
                            $("#lehigh").show("slow", function()
                            {
                                $("#homeInfo").show("slow");
                            });
                        });
                    });
                });
            });
        });
    });

    $("#nextDiv").click(function()
    {
        $("#community").show("slow");
        $("#about1").hide('fast');
        $("#about1").html("<h1 style='margin-bottom:0;'>MORE...</h1><ul>\n\
<li id='info6'><p> I have founded and lead a Lehigh Community called, 'Coding the Future.'</p></li><li id='info7'> \n\
<p> This community is made up of Lehigh students who share an interest in pursuing \n\
computer sciences' many facets </p></li><li id='info8'> <p> I am currently starting my own business to \n\
develop websites and apps for indivduals or businesses");
//<li id='info10'> <p></p></li></ul>");
        $("#about1").show('slow');
        $(this).hide('slow');
        $("#prevDiv").show('slow');
    });

    $("#prevDiv").click(function()
    {
        $("#about1").hide('fast');
        $("#about1").html("<h1 style='margin-bottom:0;'>ABOUT ME</h1><ul><li id='info1'><p>My name \n\
is Jon Merwine</p></li><li id='info2'><p >I am currently a Master's student at Lehigh University in \n\
the field of Computer Science</p></li><li id='info3'><p>I am a Head Gryphon (Head Resident Assistant) \n\
at Lehigh</p></li><li id='info4'><p>I am the founder and leader of the Coding the Future Live Lehigh \n\
community</p></li><li id='info5'><p>I am seeking a career in computer science that will utilize my Master's \n\
focus</p></li><p id='info6'>More...<p></ul>");
        $("#about1").show('slow');
        $(this).hide('slow');
        $("#nextDiv").show('slow');
    });
});

(function() {
    /**
     author: @manufosela
     2013/08/27    copyleft 2013

     ShootingStar class Main Methods:
     launch: launch shooting stars every N seconds received by param. 10 seconds by default.
     launchStar: launch a shooting star. Received options object by param with:
     - dir (direction between 0 and 1)
     - life (between 100 and 400)
     - beamSize (between 400 and 700)
     - velocity (between 2 and 10)
     **/

    ShootingStar = function(id) {
        this.n = 0;
        this.m = 0;
        this.defaultOptions = {velocity: 8, starSize: 10, life: 300, beamSize: 400, dir: -1};
        this.options = {};
        id = (typeof id !== "undefined") ? id : "";
        this.capa = ($(id).lenght > 0) ? "body" : id;
        this.wW = 7000;
        this.hW = 6000;
    };
    ShootingStar.prototype.addBeamPart = function(x, y) {
        this.n++;
        var name = this.getRandom(100, 1);
        $("#star" + name).remove();
        $(this.capa).append("<div id='star" + name + "'></div>");
        $("#star" + name).append("<div id='haz" + this.n + "' class='haz' style='position:absolute; color:#FF0; width:10px; height:10px; font-weight:bold; font-size:" + this.options.starSize + "px'>·</div>");
        if (this.n > 1)
            $("#haz" + (this.n - 1)).css({color: "rgba(255,255,255,0.5)"});
        $("#haz" + this.n).css({top: y + this.n, left: x + (this.n * this.options.dir)});
    };
    ShootingStar.prototype.delTrozoHaz = function() {
        this.m++;
        $("#haz" + this.m).animate({opacity: 0}, 75);
        if (this.m >= this.options.beamSize) {
            $("#ShootingStarParams").fadeOut("slow");
        }
    };
    ShootingStar.prototype.getRandom = function(max, min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    ShootingStar.prototype.toType = function(obj) {
        if (typeof obj === "undefined") {
            return "undefined"; /* consider: typeof null === object */
        }
        if (obj === null) {
            return "null";
        }
        var type = Object.prototype.toString.call(obj).match(/^\[object\s(.*)\]$/)[1] || '';
        switch (type) {
            case 'Number':
                if (isNaN(obj)) {
                    return "nan";
                } else {
                    return "number";
                }
            case 'String':
            case 'Boolean':
            case 'Array':
            case 'Date':
            case 'RegExp':
            case 'Function':
                return type.toLowerCase();
        }
        if (typeof obj === "object") {
            return "object";
        }
        return undefined;
    };
    ShootingStar.prototype.launchStar = function(options) {
        if (this.toType(options) !== "object") {
            options = {};
        }
        this.options = $.extend({}, this.defaultOptions, options);
        this.n = 0;
        this.m = 0;
        var i = 0, l = this.options.beamSize,
                x = this.getRandom(this.wW - this.options.beamSize - 100, 100), y = this.getRandom(this.hW - this.options.beamSize - 100, 100),
                self = this;
        for (; i < l; i++) {
            setTimeout(function() {
                self.addBeamPart(x, y);
            }, self.options.life + (i * self.options.velocity));
        }
        for (i = 0; i < l; i++) {
            setTimeout(function() {
                self.delTrozoHaz();
            }, self.options.beamSize + (i * self.options.velocity));
        }
        //$("#ShootingStarParams").html("Launching shooting star. PARAMS: wW: " + this.wW + " - hW: " + this.hW + " - life: " + this.options.life + " - beamSize: " + this.options.beamSize + " - velocity: " + this.options.velocity);
        //$("#ShootingStarParams").fadeIn("slow");
    };
    ShootingStar.prototype.launch = function(everyTime) {
        if (this.toType(everyTime) !== "number") {
            everyTime = 2;
        }
        everyTime = everyTime * 1000;
        this.launchStar();
        var self = this;
        setInterval(function() {
            var options = {
                dir: (self.getRandom(1, 0)) ? 1 : -1,
                life: self.getRandom(400, 100),
                beamSize: self.getRandom(700, 400),
                velocity: self.getRandom(10, 4)
            };
            self.launchStar(options);
        }, everyTime);
    };
})();